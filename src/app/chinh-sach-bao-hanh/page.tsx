import { FlowContentPage } from "@/features/flow/components/FlowContentPage";
import { BRAND_NAME, brandTitle } from "@/shared/constants/brand";
import { FLOW_SOCIAL_LINKS } from "@/features/wake360/data/homeContent";

export const metadata = {
  title: brandTitle("Chính sách bảo hành"),
  description: `Chính sách bảo hành sản phẩm của ${BRAND_NAME}.`,
};

export default function WarrantyPolicyPage() {
  return (
    <FlowContentPage title="Chính sách bảo hành">
      <p>
        Cảm ơn bạn đã tin tưởng và lựa chọn sản phẩm của {BRAND_NAME}. Chúng mình cam kết mang đến cho
        bạn những sản phẩm chất lượng và dịch vụ tốt nhất.
      </p>
      <p>
        <strong>Chính sách bảo hành của chúng mình như sau:</strong>
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Phạm vi bảo hành:</strong> Lỗi sản xuất, lỗi do vận chuyển, không vừa (hỗ trợ đổi
          size).
        </li>
        <li>
          <strong>Điều kiện bảo hành:</strong> Sản phẩm còn mới, chưa qua sử dụng hoặc giặt ủi, có
          đầy đủ tag và có quay video unbox.
        </li>
        <li>
          <strong>Quy trình bảo hành:</strong> Vui lòng liên hệ với chúng mình qua{" "}
          <a
            href={FLOW_SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b20000] underline underline-offset-2"
          >
            fanpage
          </a>{" "}
          để được hướng dẫn chi tiết.
        </li>
      </ul>
    </FlowContentPage>
  );
}
