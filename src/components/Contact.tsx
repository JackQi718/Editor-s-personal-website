import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        
        {/* Form Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">服务类型</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-white"
                required
              >
                <option value="">请选择服务类型</option>
                <option value="企业宣传">企业宣传视频</option>
                <option value="短视频">社交媒体短视频</option>
                <option value="特效">高级调色与特效</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">留言内容</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#007BFF] hover:bg-[#0056B3] text-white py-3 rounded-lg transition-colors"
            >
              发送消息
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <Mail className="w-8 h-8 text-[#007BFF] mx-auto mb-4" />
            <h3 className="font-medium mb-2">邮箱</h3>
            <a
              href="mailto:shijuebaba@qq.com"
              className="text-[#007BFF] hover:underline"
            >
              shijuebaba@qq.com
            </a>
          </div>
          
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <MessageSquare className="w-8 h-8 text-[#007BFF] mx-auto mb-4" />
            <h3 className="font-medium mb-2">微信号</h3>
            <p>BEISHAN5678</p>
          </div>
          
          <div className="bg-[#2A2A2A] p-6 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1672908116744-a03d6ab9e4f3?auto=format&fit=crop&q=80"
              alt="微信二维码"
              className="w-32 h-32 mx-auto mb-2 rounded-lg"
            />
            <p className="text-sm text-gray-400">扫码添加微信</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;