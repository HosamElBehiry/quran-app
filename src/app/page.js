import { HomeSections } from "@/components/home/home-section";
import { HomeSlider } from "@/components/home/home-slider";
import { MainData, OtherData } from "@/constants/home";

const HomePage = () => {
  return (
    <main>
      <HomeSlider />
      <HomeSections
        Data={MainData}
        title="أقسام المسابقة"
        description="تقدم لك المسابقة اربع مسارات رئيسية فى مجال القران الكريم"
      />
      <HomeSections
        Data={OtherData}
        title="أقسام أخرى"
        description=" نقدم لكم أيضا أقسام أخرى"
      />
    </main>
  );
};

export default HomePage;
