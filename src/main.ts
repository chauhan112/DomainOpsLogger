import "./style.css";
import { Home } from "./rlib/timeline/t2025/june/domain-ops/Page";
import { SimpleAnimationExample } from "./rlib/timeline/t2025/june/Animations";
// import { Home } from "./rlib/timeline/t2025/april/DomainOps/Home";
const page = Home();

document.querySelector<HTMLDivElement>("#app")?.appendChild(page.getElement());
