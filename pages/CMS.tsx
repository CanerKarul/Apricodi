import React, { useMemo, useState } from 'react';
import { Calendar, CheckCircle2, FileText, Filter, LayoutGrid, Search } from 'lucide-react';
import { Badge, Button, Card, Input, SectionHeader } from '../components/ui';
import { contentItems } from '../data';
import { ContentItem } from '../types';

const statusColors: Record<ContentItem['status'], string> = {
  Planlama: 'bg-amber-50 text-amber-700 border-amber-200',
  Yazım: 'bg-blue-50 text-blue-700 border-blue-200',
  Revizyon: 'bg-purple-50 text-purple-700 border-purple-200',
  Yayında: 'bg-emerald-50 text-emerald-700 border-emerald-200'
};

const priorityColor: Record<ContentItem['priority'], string> = {
  Yüksek: 'bg-rose-50 text-rose-700 border-rose-200',
  Orta: 'bg-amber-50 text-amber-700 border-amber-200',
  Düşük: 'bg-slate-100 text-slate-700 border-slate-200'
};

export const CMS: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'Tümü' | ContentItem['status']>('Tümü');
  const [channelFilter, setChannelFilter] = useState<'Tümü' | ContentItem['channel']>('Tümü');
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return contentItems.filter((item) => {
      const matchesStatus = statusFilter === 'Tümü' || item.status === statusFilter;
      const matchesChannel = channelFilter === 'Tümü' || item.channel === channelFilter;
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      return matchesStatus && matchesChannel && matchesSearch;
    });
  }, [statusFilter, channelFilter, search]);

  const stats = useMemo(() => {
    const total = contentItems.length;
    const published = contentItems.filter((item) => item.status === 'Yayında').length;
    const inProgress = contentItems.filter((item) => item.status === 'Yazım' || item.status === 'Revizyon').length;
    const planned = contentItems.filter((item) => item.status === 'Planlama').length;
    return { total, published, inProgress, planned };
  }, []);

  const channels = useMemo(() => ['Tümü', ...new Set(contentItems.map((item) => item.channel))], []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-12">
          <div className="lg:col-span-2">
            <SectionHeader
              title="İçerik CMS ve Operasyon Paneli"
              subtitle="Kampanyalar, blog yazıları ve sosyal medya akışını tek ekrandan yönetin; durum, kanal ve öncelik bazlı takibi hızlandırın."
              align="left"
            />
            <div className="flex flex-wrap gap-3">
              <Badge>Gerçek zamanlı durum takibi</Badge>
              <Badge variant="slate">Yayın takvimi</Badge>
              <Badge variant="slate">Çoklu kanal yönetimi</Badge>
            </div>
          </div>
          <Card className="p-6 shadow-lg border-brand-100">
            <div className="flex items-center gap-3 mb-4">
              <LayoutGrid className="text-brand-600" size={24} />
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Yayın Takvimi</p>
                <p className="text-lg font-bold text-slate-900">Haftalık görünüm</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Bu hafta teslim:</span>
                <span className="text-brand-600">{filteredItems.filter((item) => item.status !== 'Yayında').length} içerik</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kanallar</span>
                <span className="font-semibold text-slate-900">{channels.length - 1} aktif</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Öncelik: Yüksek</span>
                <Badge variant="brand">{filteredItems.filter((item) => item.priority === 'Yüksek').length}</Badge>
              </div>
            </div>
            <Button className="w-full mt-6" variant="primary">Yeni içerik briefi başlat</Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 font-semibold">Toplam içerik</span>
              <FileText size={18} className="text-brand-500" />
            </div>
            <p className="text-3xl font-extrabold text-slate-900">{stats.total}</p>
            <p className="text-sm text-slate-500">Tüm kanallar</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 font-semibold">Yayında</span>
              <CheckCircle2 size={18} className="text-emerald-500" />
            </div>
            <p className="text-3xl font-extrabold text-slate-900">{stats.published}</p>
            <p className="text-sm text-slate-500">Son güncellemeler dahil</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 font-semibold">Çalışma aşamasında</span>
              <Filter size={18} className="text-blue-500" />
            </div>
            <p className="text-3xl font-extrabold text-slate-900">{stats.inProgress}</p>
            <p className="text-sm text-slate-500">Yazım & Revizyon</p>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 font-semibold">Planlanan</span>
              <Calendar size={18} className="text-amber-500" />
            </div>
            <p className="text-3xl font-extrabold text-slate-900">{stats.planned}</p>
            <p className="text-sm text-slate-500">Kampanya briefleri</p>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-brand-50 text-brand-700">
                <FileText />
              </div>
              <div>
                <p className="text-sm text-slate-500">İçerik listesi</p>
                <p className="text-lg font-bold text-slate-900">Durum, kanal, öncelik</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-slate-400" size={18} />
                <Input
                  placeholder="Başlık veya etiket ara"
                  className="pl-10 w-64 bg-white"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'Tümü' | ContentItem['status'])}
                className="px-4 py-3 rounded-md border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {['Tümü', 'Planlama', 'Yazım', 'Revizyon', 'Yayında'].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <select
                value={channelFilter}
                onChange={(e) => setChannelFilter(e.target.value as 'Tümü' | ContentItem['channel'])}
                className="px-4 py-3 rounded-md border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {channels.map((channel) => (
                  <option key={channel} value={channel}>{channel}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">İçerik</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Kanal</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Durum</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Öncelik</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Son Güncelleme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-500 items-center">
                        <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold">{item.type}</span>
                        <span>•</span>
                        <span>{item.owner}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          <Calendar size={14} /> {item.dueDate}
                        </span>
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-brand-50 text-brand-700 rounded-md border border-brand-100 font-semibold">#{tag}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-700">{item.channel}</td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border ${priorityColor[item.priority]}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">{item.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-emerald-500" />
              <div>
                <p className="text-sm text-slate-500">Yayın sonrası adımlar</p>
                <p className="text-lg font-bold text-slate-900">Kalite ve ölçümleme checklist'i</p>
              </div>
            </div>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Search Console & Lighthouse skor kontrolü</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> UTM'li link paylaşımı ve kanal bazlı takibi</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> Revizyon SLA'si: 48 saat içi güncelleme</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">•</span> A/B test backlog'una ekleme</li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="text-brand-600" />
              <div>
                <p className="text-sm text-slate-500">Operasyonel notlar</p>
                <p className="text-lg font-bold text-slate-900">Ekip içi süreç rehberi</p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Rol dağılımı</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500">İçerik Sahibi</p>
                  <p className="font-semibold text-slate-900">Brieften yayına kadar sorumlu</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500">Editör</p>
                  <p className="font-semibold text-slate-900">SEO, stil ve doğruluk kontrolü</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500">Tasarım</p>
                  <p className="font-semibold text-slate-900">Banner & sosyal kırılımlar</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-500">Analytics</p>
                  <p className="font-semibold text-slate-900">KPI ve raporlama takibi</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Süreç dokümanını indir</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};