
import { supabase } from './supabase';

export type FormType = "contact" | "quote" | "career" | "volunteer";

interface SubmitResponse {
  ok: boolean;
  message?: string;
}

// Helper: Get Turkey Local Time ISO String (UTC+3)
const getTurkeyTimeISO = () => {
  const now = new Date();
  // Turkey is UTC+3. Offset is 3 hours in milliseconds.
  const TR_OFFSET = 3 * 60 * 60000; 
  const turkeyTime = new Date(now.getTime() + TR_OFFSET);
  // toISOString always adds 'Z' (UTC). We replace it with the correct offset for Turkey.
  return turkeyTime.toISOString().replace('Z', '+03:00');
};

// Helper: Convert camelCase string to snake_case
const toSnakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

// Helper: Convert all keys of an object to snake_case
const mapKeysToSnakeCase = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[toSnakeCase(key)] = obj[key];
    }
  }
  return newObj;
};

export async function submitForm(
  formType: FormType,
  payload: Record<string, any>
): Promise<SubmitResponse> {
  
  // Map form types to Supabase table names
  let tableName = '';
  
  switch (formType) {
    case 'contact':
      tableName = 'contact_submissions';
      break;
    case 'quote':
      tableName = 'quote_submissions';
      break;
    case 'career':
      tableName = 'career_submissions';
      break;
    case 'volunteer':
      tableName = 'volunteer_submissions';
      break;
    default:
      console.error('Unknown form type:', formType);
      return { ok: false, message: 'Geçersiz form tipi.' };
  }

  try {
    // 1. Convert payload keys to snake_case to match Supabase/Postgres columns
    const snakedPayload = mapKeysToSnakeCase(payload);

    // 2. Add timestamp in Turkey Timezone
    const dataToInsert = {
      ...snakedPayload,
      created_at: getTurkeyTimeISO()
    };

    console.log(`Submitting to ${tableName}...`, dataToInsert);

    const { error } = await supabase
      .from(tableName)
      .insert([dataToInsert]);

    if (error) {
      console.error('Supabase Error Details:', JSON.stringify(error, null, 2));
      return { ok: false, message: "Sunucu hatası: Veriler kaydedilemedi." };
    }

    return { ok: true, message: "Başarıyla kaydedildi." };

  } catch (err) {
    console.error('Unexpected Error:', err);
    return { ok: false, message: "Beklenmedik bir hata oluştu." };
  }
}
