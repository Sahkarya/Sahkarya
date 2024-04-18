const summary = require("./AI");
async function makeEmail(message, dep) {
  const tag = await summary(message);
  const content = `Dear Citizen,\nIt is writing to inform you that the concern you raised regarding "${tag}" has been successfully resolved by our department. We understand the importance of addressing such issues promptly and have taken the necessary steps to rectify the situation.\n\nWe appreciate your patience and understanding throughout this process. Your feedback is invaluable to us as it helps us improve our services and ensure that we continue to meet the needs of our community.\n\nIf you have any further questions or concerns, please do not hesitate to reach out to us. We are here to assist you in any way we can.\n\nThank you once again for bringing this matter to our attention.\n\nBest regards,\nConcern Manager\n${dep}`;
  return content;
}
module.exports = makeEmail;
