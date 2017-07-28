$('.form-group .form-control-feedback').click(function () {
  $("input[type='password']").attr('type', 'text');
}, function () {
  $("input[type='password']").attr('type', 'password');
});
