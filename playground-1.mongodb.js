/* global use, db */

// ✅ Select your actual database
use('myokr');

// ✅ Insert sample OKRs (Skip if already inserted)
db.okrs.insertMany([
  {
    objective: 'Improve onboarding process',
    keyResults: ['Reduce drop-off rate by 20%', 'Launch tutorial feature'],
    team: 'Product',
    progress: 10
  },
  {
    objective: 'Increase site speed',
    keyResults: ['Achieve 90+ Lighthouse score', 'Reduce TTFB < 500ms'],
    team: 'Frontend',
    progress: 50
  }
]);

// ✅ Find all OKRs
const allOkrs = db.okrs.find().toArray();
console.log('📄 All OKRs:', allOkrs);

// ✅ Update an OKR's progress
const updateResult = db.okrs.updateOne(
  { objective: 'Increase site speed' },
  { $set: { progress: 75 } }
);
console.log(`✅ Updated OKR progress: ${updateResult.modifiedCount} document(s)`);

// ✅ Delete one OKR (if needed)
const deleteResult = db.okrs.deleteOne({ objective: 'Improve onboarding process' });
console.log(`🗑️ Deleted OKRs: ${deleteResult.deletedCount} document(s)`);

// ✅ Count all remaining OKRs
const total = db.okrs.countDocuments();
console.log(`📊 Total OKRs after update/delete: ${total}`);
