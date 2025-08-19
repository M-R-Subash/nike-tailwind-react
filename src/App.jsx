import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./Components/Nav";

export default function App() {
  return (
    <main className="relative ">
      <Nav/>
      <section className="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
      <section className="sm:px-16 px-8 py-8 sm:py-4"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding-x py-10"><Services/></section>
      <section className="padding"><SpecialOffers/></section>
      <section className="padding bg-pale-blue"><CustomerReview/></section>
      <section className="padding-x sm:py-32 py-16 w-full "><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>
  );
}
