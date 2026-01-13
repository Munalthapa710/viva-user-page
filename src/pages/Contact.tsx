import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Support & HR</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
        <h3 className="font-bold text-lg mb-4">Contact Info</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="text-blue-500" size={20} />
            <span>hr@vivatms.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="text-blue-500" size={20} />
            <span>+977 9800000000</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="text-blue-500" size={20} />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-4">Send a Message</h3>
        <form className="space-y-4">
          <textarea 
            placeholder="Describe your issue or leave request..." 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}