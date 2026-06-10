import { ContactForm } from "@/features/flow/components/ContactForm";
import { FlowContentPage } from "@/features/flow/components/FlowContentPage";
import { BRAND_NAME, brandTitle } from "@/shared/constants/brand";
import { FLOW_CONTACT } from "@/features/wake360/data/homeContent";

export const metadata = {
  title: brandTitle("Liên hệ"),
  description: `Liên hệ với ${BRAND_NAME}.`,
};

export default function ContactPage() {
  return (
    <FlowContentPage title="Liên hệ">
      <p>
        Bạn có câu hỏi hoặc cần hỗ trợ? Hãy gửi tin nhắn cho {BRAND_NAME} hoặc liên hệ trực tiếp
        qua hotline <strong>{FLOW_CONTACT.phone}</strong> và email{" "}
        <strong>{FLOW_CONTACT.email}</strong>.
      </p>
      <ContactForm />
    </FlowContentPage>
  );
}
