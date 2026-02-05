
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const metadata = {
    title: 'Order Complete | Cell Store',
    description: "Cell Store Online Shopping",
};

const CompletePage = () => {
    return (
    <main>
        <h1 className="mt-5 mb-4 d-flex align-items-center justify-content-center">Order Complete <FaCheckCircle className="m-2 text-success"/></h1>
        <Link href="/" className="d-flex justify-content-center">Continue shopping</Link>
    </main>
  )
};

export default CompletePage;
