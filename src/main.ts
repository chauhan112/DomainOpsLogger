import "./style.css";
import { NewDesign } from "./rlib/timeline/t2025/june/domain-ops/NewDesign";
//
// import { Home } from "./rlib/timeline/t2025/april/DomainOps/Home";
// const page = new Home();
const page = NewDesign();

document.querySelector<HTMLDivElement>("#app")?.appendChild(page.getElement());
