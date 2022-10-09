import React from "react";
import Section from "../../components/Section/section";
import Gallery from "../../layout/Gallery/gallery";
import Body from "../../layout/Body/body";

export default function Home() {
  return (
    <div>
      <Body>
        <Section />
        <Gallery />
      </Body>
    </div>
  );
}
