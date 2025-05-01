import React, { useState } from 'react';
import { Phone, Truck, Gift, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const telegramMessage = `📩 رسالة جديدة من الموقع:\n👤 الاسم: ${formData.name}\n📱 الهاتف: ${formData.phone}\n💬 الرسالة: ${formData.message}`;

    await fetch(
      `https://api.telegram.org/bot7457098683:AAFs6QJMOz7A6K2tzb_n3BHRQECw5XR2sjo/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 6663911721,
          text: telegramMessage,
        }),
      }
    );

    // عرض رسالة النجاح
    setSuccessMessage('تم إرسال رسالتك بنجاح!');

    // إفراغ الحقول
    setFormData({ name: '', phone: '', message: '' });

    // إخفاء الرسالة بعد 4 ثواني (اختياري)
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">تواصل معنا</h2>
          <p className="text-gray-600">
            نحن هنا لمساعدتك في اختيار الساعة المناسبة
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gray-900 text-white">
              <h3 className="text-2xl font-bold mb-6 text-right">
                معلومات التواصل
              </h3>

              <div className="space-y-6">
                <div className="flex items-center justify-end gap-4 text-right">
                  <div>
                    <p className="font-semibold">رقم الهاتف</p>
                    <p className="text-gray-300 mt-1">0780790849</p>
                  </div>
                  <Phone className="text-amber-400" size={24} />
                </div>

                <div className="flex items-center justify-end gap-4 text-right">
                  <div>
                    <p className="font-semibold">التوصيل</p>
                    <p className="text-gray-300 mt-1">
                      متوفر داخل وخارج الأردن
                    </p>
                  </div>
                  <Truck className="text-amber-400" size={24} />
                </div>

                <div className="flex items-center justify-end gap-4 text-right">
                  <div>
                    <p className="font-semibold">هدايا مجانية</p>
                    <p className="text-gray-300 mt-1">
                      تغليف هدايا مجاني مع كل طلب
                    </p>
                  </div>
                  <Gift className="text-amber-400" size={24} />
                </div>

                <div className="flex items-center justify-end gap-4 text-right">
                  <div>
                    <p className="font-semibold">العنوان</p>
                    <p className="text-gray-300 mt-1">عمان، الأردن</p>
                  </div>
                  <MapPin className="text-amber-400" size={24} />
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-right text-gray-800">
                أرسل لنا رسالة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <div>
                  <label className="block text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="أدخل رقم هاتفك"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="اكتب رسالتك هنا"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors duration-300 w-full"
                >
                  إرسال
                </button>

                {successMessage && (
                  <p className="text-green-600 text-center mt-4">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
