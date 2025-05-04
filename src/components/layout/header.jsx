import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-sky-800 text-white py-3 max-sm:py-2">
      <div className="container mx-auto max-sm:px-3 flex items-center justify-between">
        <p className="lg:text-sm text-[10px] max-lg:text-[13px] font-semibold">
          الأحد، ٦ ذو القعدة ١٤٤٦ هـ
        </p>
        <div className="flex items-center max-sm:gap-1 gap-2">
          <Link
            href="/login"
            className="lg:text-sm text-[10px] max-lg:text-[13px] font-semibold hover:underline"
          >
            تسجيل الدخول
          </Link>
          <span> / </span>
          <Link
            href="/register"
            className="lg:text-sm text-[10px] max-lg:text-[13px] font-semibold hover:underline"
          >
            إشتراك
          </Link>
        </div>
      </div>
    </header>
  );
};
