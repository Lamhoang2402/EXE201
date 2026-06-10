import { FlowContentPage } from "@/features/flow/components/FlowContentPage";
import { BRAND_NAME, brandTitle } from "@/shared/constants/brand";
import { FLOW_CONTACT } from "@/features/wake360/data/homeContent";

export const metadata = {
  title: brandTitle("Phương thức thanh toán"),
  description: `Các phương thức thanh toán khi mua hàng tại ${BRAND_NAME}.`,
};

export default function PaymentMethodsPage() {
  return (
    <FlowContentPage title="Phương thức thanh toán">
      <p>
        <strong>I. Phương thức thanh toán ONLINE</strong>
      </p>
      <p>
        Khi quý khách hàng mua hàng online tại hệ thống bán hàng của {BRAND_NAME} sẽ có 02 hình thức
        thanh toán tiện lợi như sau:
      </p>

      <h2 className="pt-2 text-base font-semibold text-neutral-900">Thanh toán COD</h2>
      <p>
        Quý khách hàng sẽ thanh toán trực tiếp cho nhân viên vận chuyển khi nhận hàng tại thông tin
        địa chỉ đã cung cấp trên đơn đặt hàng.
      </p>

      <h2 className="pt-2 text-base font-semibold text-neutral-900">Thanh toán chuyển khoản</h2>
      <p>
        Quý khách hàng có thể chuyển khoản trước toàn bộ giá trị đơn hàng theo nhu cầu. {BRAND_NAME}{" "}
        sẽ căn cứ thông tin chuyển khoản và xác nhận đơn hàng và giao hàng đến tay quý khách.
      </p>
      <p>
        Quý khách vui lòng nhập thông tin đặt hàng =&gt; Sau đó nhấn &ldquo;Đặt hàng&rdquo; =&gt; Sau
        đó quét mã QR để thanh toán.
      </p>

      <p>
        Mọi vấn đề phát sinh trong quá trình thanh toán hoặc cần thêm sự hỗ trợ khác, quý khách vui
        lòng gọi điện thoại theo số hotline Chăm sóc khách hàng từ {BRAND_NAME}:{" "}
        <strong>{FLOW_CONTACT.phone}</strong>
      </p>
    </FlowContentPage>
  );
}
