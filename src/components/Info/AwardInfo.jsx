export function AwardInfo() {
  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>Awards</h1>
        <div className={"border-b py-4 space-y-4"}>
          <div className={"space-y-1 text-sm"}>
            <p className={"capitalize font-bold"}>best web designer</p>
            <p className={"capitalize text-gray-700"}>btc corp.</p>
            <p className={"capitalize text-gray-700"}>2015 - 2016</p>
          </div>
          <div className={"space-y-1 text-sm"}>
            <p className={"capitalize font-bold"}>best programmer</p>
            <p className={"capitalize text-gray-700"}>university</p>
            <p className={"capitalize text-gray-700"}>2015 - 2016</p>
          </div>
        </div>
      </aside>
    </>
  );
}
