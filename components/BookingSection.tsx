import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Sparkles, User, Building, Phone, Mail, MapPin, Euro } from 'lucide-react';
import { BookingFormData } from '../types';
import { TRADE_PRESETS } from '../constants';

const TIME_SLOTS = [
  '09:00', '10:30', '11:45', '14:00', '15:30', '17:00', '18:15'
];

const TICKET_RANGES = [
  '10 000 € à 25 000 €',
  '25 000 € à 50 000 €',
  '50 000 € à 100 000 €',
  'Plus de 100 000 €'
];

const BookingSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('Demain');
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    company: '',
    trade: TRADE_PRESETS[0].name,
    city: '',
    averageTicket: TICKET_RANGES[1],
    phone: '',
    email: '',
    selectedDate: 'Demain',
    selectedTime: '14:00',
    notes: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Bonjour Aaron, je souhaite réserver un créneau de diagnostic pour mon entreprise BTP :\n- Nom : ${formData.name || 'Artisan'}\n- Entreprise : ${formData.company || 'BTP'}\n- Métier : ${formData.trade}\n- Secteur : ${formData.city || 'Non renseigné'}\n- Panier moyen : ${formData.averageTicket}\n- Créneau souhaité : ${selectedDate} à ${selectedTime}`;
    return `https://wa.me/33767056066?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blueLight border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar size={14} />
            <span>Diagnostic Gratuit &amp; Sans Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-brand-dark tracking-tight mb-5">
            30 minutes d'échange pour évaluer le potentiel de votre secteur
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Analysons ensemble le volume de propriétaires dans votre rayon d'action et la disponibilité de votre secteur pour l'exclusivité géographique.
          </p>

          {/* 3 Core Value Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Vérification de l'exclusivité de votre zone
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Estimation du coût par prospect qualifié
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <CheckCircle2 size={15} className="text-brand-blue" />
              Échange direct avec Aaron (sans commercial)
            </span>
          </div>
        </div>

        {/* Booking Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-card">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Slot Selection */}
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-black">1</span>
                  Choisissez votre créneau préféré pour l'appel
                </h3>

                {/* Day selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  {['Aujourd’hui', 'Demain', 'Dans 2 jours', 'Dans 3 jours'].map((day) => (
                    <button
                      type="button"
                      key={day}
                      onClick={() => { setSelectedDate(day); setFormData({ ...formData, selectedDate: day }); }}
                      className={`p-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all text-center ${
                        selectedDate === day
                          ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Time slots */}
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => { setSelectedTime(time); setFormData({ ...formData, selectedTime: time }); }}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                        selectedTime === time
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <Clock size={13} />
                      <span>{time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Information form */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-black">2</span>
                  Vos coordonnées &amp; Votre spécialité
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Nom &amp; Prénom *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Marc Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Nom de votre Entreprise *
                    </label>
                    <div className="relative">
                      <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Dupont Rénovation & Piscines"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Corps d'état principal *
                    </label>
                    <select
                      value={formData.trade}
                      onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    >
                      {TRADE_PRESETS.map((preset) => (
                        <option key={preset.id} value={preset.name}>{preset.name}</option>
                      ))}
                      <option value="Autre spécialité BTP">Autre spécialité BTP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Ville &amp; Rayon d'intervention *
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Lyon et 40 km autour"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Panier moyen par chantier cible *
                    </label>
                    <div className="relative">
                      <Euro size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select
                        value={formData.averageTicket}
                        onChange={(e) => setFormData({ ...formData, averageTicket: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      >
                        {TICKET_RANGES.map((ticket) => (
                          <option key={ticket} value={ticket}>{ticket}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Téléphone portable *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck size={16} className="text-brand-blue" />
                  <span>Vos coordonnées restent 100% confidentielles. Zéro démarchage intempestif.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-blueHover text-white rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/25 transition-all active:scale-98"
                >
                  <Calendar size={18} />
                  <span>Valider mon créneau de diagnostic</span>
                </button>
              </div>

            </form>
          ) : (
            <div className="text-center py-10 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-2">
                Demande de diagnostic enregistrée !
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Merci {formData.name}. Votre créneau a bien été réservé pour le <strong>{selectedDate} à {selectedTime}</strong>. Aaron vous contactera personnellement au <strong>{formData.phone}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-left text-xs space-y-1.5 mb-6 text-slate-700">
                <p><strong>Entreprise :</strong> {formData.company}</p>
                <p><strong>Spécialité :</strong> {formData.trade}</p>
                <p><strong>Secteur :</strong> {formData.city}</p>
                <p><strong>Panier moyen visé :</strong> {formData.averageTicket}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>Confirmer directement sur WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full font-bold text-xs transition-colors"
                >
                  Modifier les informations
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
