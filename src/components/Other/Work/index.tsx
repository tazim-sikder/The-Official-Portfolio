import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { Work } from "@/data/WorkData";
import Card from "@/components/Other/Card";
import { StyledWork, Content } from "./style";
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
};
const WorksPage = () => {
  const { setCardHover } = useContext(GlobalContext);
  return (
    <StyledWork>
      {" "}
      <Content
        variants={container}
        initial="hidden"
        animate="show"
        onHoverEnd={() => setCardHover(false)}
      >
        {" "}
        {Work.map((d) => (
          <Card key={d.id} data={d} />
        ))}{" "}
      </Content>{" "}
    </StyledWork>
  );
};
export default WorksPage;
