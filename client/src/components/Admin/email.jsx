

export default makeContent = (message,id)=>{
    const summary = run(message);
    const content = `Subject: Confirmation: Resolution of Your Concern

    Dear Citizen,
    
    I hope this email finds you well.
    
    I am writing to inform you that the concern you raised regarding ${summary} has been successfully resolved by our department. We understand the importance of addressing such issues promptly and have taken the necessary steps to rectify the situation.
    
    We appreciate your patience and understanding throughout this process. Your feedback is invaluable to us as it helps us improve our services and ensure that we continue to meet the needs of our community.
    
    If you have any further questions or concerns, please do not hesitate to reach out to us. We are here to assist you in any way we can.
    
    Thank you once again for bringing this matter to our attention.
    
    Best regards,
    
    Concern Manager
    ${departments[id-1].label}`
    return content;
}