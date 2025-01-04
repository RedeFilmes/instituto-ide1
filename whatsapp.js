function formatWhatsAppMessage(formData) {
    try {
        const message = `
*Nova Inscrição - Instituto IDE*
Nome: ${formData.name}
CPF: ${formData.cpf}
RG: ${formData.rg}
Data de Nascimento: ${formData.birthDate}
Email: ${formData.email}
Telefone: ${formData.phone}
Endereço: ${formData.address}
Curso: ${formData.course}
        `.trim();

        return encodeURIComponent(message);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function sendToWhatsApp(formData) {
    try {
        const message = formatWhatsAppMessage(formData);
        const whatsappNumber = "5521971550633";
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    } catch (error) {
        reportError(error);
        throw error;
    }
}
