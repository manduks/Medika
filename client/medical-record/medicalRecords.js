Template.medicalRecords.helpers({
    records: function () {
        if (!Session.get('filter')) {
            Session.set('filter', '');
        }
        return MedicalRecords.find({
            description: {$regex: Session.get('filter'), $options: 'i'}
        });
    }
});