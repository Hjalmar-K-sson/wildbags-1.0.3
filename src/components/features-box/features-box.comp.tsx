import { SimpleGrid } from "@chakra-ui/react";
import features_1 from "../../assets/images/features/features_1.jpg";
import features_2 from "../../assets/images/features/features_2.jpg";
import features_3 from "../../assets/images/features/features_3.jpg";
import features_4 from "../../assets/images/features/features_4.jpg";

import FeatureCard from "./feature-card.sub-comp";

const FeaturesBox = () => {
  return (
    <SimpleGrid columns={[1, null, 2, 4]} spacing={8} p={[4, 12]}>
      <FeatureCard src={features_1} label={"JESTEŚMY ECO"} />
      <FeatureCard src={features_2} label={"WYŻSZA FORMA UPCYKLINGU"} />
      <FeatureCard src={features_3} label={"SLOW FASHION"} />
      <FeatureCard src={features_4} label={"ZERO WASTE"} />
    </SimpleGrid>
  );
};

export default FeaturesBox;
