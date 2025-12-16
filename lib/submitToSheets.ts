export type FormType = "contact" | "quote" | "career" | "volunteer";

interface SubmitResponse {
  ok: boolean;
  message?: string;
}

/**
 * Bu fonksiyon artık Google Sheets'e istek atmaz.
 * Backend sisteminiz kurulana kadar verileri konsola yazar ve başarılı döner.
 * Gelecekte buraya API isteğinizi (axios/fetch) ekleyebilirsiniz.
 */
export async function submitForm(
  formType: FormType,
  payload: Record<string, any>
): Promise<SubmitResponse> {
  
  console.group("📝 Form Gönderildi (Simülasyon)");
  console.log("Tip:", formType);
  console.log("Veri:", payload);
  console.groupEnd();

  // Ağ gecikmesini simüle et (1 saniye)
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Başarılı yanıt döndür
  return { ok: true, message: "Form başarıyla kaydedildi (Demo Modu)." };

  // Hata simülasyonu yapmak isterseniz yorumu kaldırın:
  // return { ok: false, message: "Sunucu hatası oluştu." };
}