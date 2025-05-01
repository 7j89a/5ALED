import React from 'react';
import {
  Watch,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-4">
              <span className="text-xl font-bold mr-2">𝑹𝒂𝒏𝒅𝒐𝒛𝒂𝒔𝒉𝒐𝒑</span>
              <Watch size={24} className="text-amber-400" />
            </div>
            <p className="text-gray-400 mb-6">
              معرض مميز لساعات اليد العصرية، بتصاميم متنوعة تناسب كل الأذواق.
              اختر ساعتك المفضلة الآن!
            </p>
            <div className="flex items-center justify-end gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573452025730&locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-amber-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/randozashop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-amber-500 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#watches"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  المنتجات
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  ساعات مميزة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-gray-400">البريد الإلكتروني</p>
                  <p className="text-white">randozashop@gmail.com</p>
                </div>
                <Mail size={20} className="text-amber-400" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-gray-400">رقم الهاتف</p>
                  <p className="text-white">0780790849</p>
                </div>
                <Phone size={20} className="text-amber-400" />
              </div>

              <div className="flex items-center justify-end gap-3">
                <div>
                  <p className="text-gray-400">العنوان</p>
                  <p className="text-white">عمان، الأردن</p>
                </div>
                <MapPin size={20} className="text-amber-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © 2025 𝑹𝒂𝒏𝒅𝒐𝒛𝒂𝒔𝒉𝒐𝒑. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;