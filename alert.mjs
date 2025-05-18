// إضافة وظيفة exploitStart لتنفيذ الاستغلال عند الضغط على الزر
window.exploitStart = function() {
    console.log("بدء تنفيذ الاستغلال...");
    // استدعاء وظائف الاستغلال من psfree.mjs
    import('./psfree.mjs').catch(error => {
        console.error("خطأ في تحميل psfree.mjs:", error);
        alert("حدث خطأ أثناء تحميل ملفات الاستغلال. يرجى إعادة تحميل الصفحة والمحاولة مرة أخرى.");
    });
};

// إعداد معالجات الأخطاء غير المعالجة
addEventListener('unhandledrejection', event => {
    const reason = event.reason;
    alert(
        'خطأ غير معالج\n' +
        `${reason}\n` +
        `${reason.sourceURL}:${reason.line}:${reason.column}\n` +
        `${reason.stack}`
    );
});

addEventListener('error', event => {
    const reason = event.error;
    alert(
        'خطأ غير معالج\n' +
        `${reason}\n` +
        `${reason.sourceURL}:${reason.line}:${reason.column}\n` +
        `${reason.stack}`
    );
    return true;
});
