"use client";
import React from "react";

const OrderDetails = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { hello: string };
}) => {
  const { hello } = searchParams;
  const { id } = params;

  console.log({ hello, id });

  return (
    <div>
      {id}
      <br />
      {hello}
    </div>
  );
};

export default OrderDetails;
