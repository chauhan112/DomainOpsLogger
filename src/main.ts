import "./style.css";

import { MainPage } from "./rlib/timeline/t2025/june/domain-ops/Logger";
//
// import { Home } from "./rlib/timeline/t2025/april/DomainOps/Home";
// const page = new Home();
// const page = NewDesign();
const page = MainPage();

document.querySelector<HTMLDivElement>("#app")?.appendChild(page.getElement());
