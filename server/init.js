Meteor.startup(function() {

  if (MedicalRecords.find().count() === 0) {
    var courseId = 0,
        agendaId;
    for (i = 0; i < 26; i++) {
      MedicalRecords.insert({
        description: 'Esta es la descripcion ' + i,
      });
    }
  }

  return Inject.rawModHtml('addUnresolved', function(html) {
    return html = html.replace('<body>', '<body unresolved>');
  });
});