document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if (!fullname || !email || !country || !comments) {
      alert('الرجاء تعبئة جميع الحقول قبل الإرسال.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('الرجاء إدخال بريد إلكتروني صالح.');
      return;
    }

    alert('تم إرسال النموذج بنجاح يا هاشم!');
    form.reset();
  });
});
