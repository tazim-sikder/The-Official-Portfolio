import { TemplateVerticalFreeProps } from "@/interfaces/TemplateSlideVerticalProps/TemplateSlideVerticalProps";
import NumberPagination from "@/components/Other/NumberPagination";
import { StyledTemplateSlideVerticalFreeScroll } from "./style";
const TemplateSlideVerticalFreeScroll = ({
  children,
  number,
}: TemplateVerticalFreeProps) => {
  return (
    <StyledTemplateSlideVerticalFreeScroll
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 100 } }}
      transition={{
        duration: 1,
        type: "spring",
        delay: 0.3,
        damping: 15,
        staggerChildren: 0.5,
      }}
    >
      {" "}
      <NumberPagination number={number} /> {children}{" "}
    </StyledTemplateSlideVerticalFreeScroll>
  );
};
export default TemplateSlideVerticalFreeScroll;
