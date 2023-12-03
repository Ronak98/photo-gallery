import React, { Suspense } from "react";
import { Spin } from "antd";
import "../style.css";

const GalleryContainer = React.lazy(() =>
  import("../components/GalleryContainer")
);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="common__wrapper">
          <Spin />
        </div>
      }
    >
      <GalleryContainer />
    </Suspense>
  );
}
