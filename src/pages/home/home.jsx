import React from "react";
import Movielist from "../../modules/movie-list/movie-list";

// trang page dùng để setup giao diện chung
export default function Home() {
  return (
    <div className="py-5">
      <Movielist />
    </div>
  );
}
