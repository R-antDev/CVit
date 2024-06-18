export function ReferenceInfo() {
  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>References</h1>
        <div className={"border-b py-4 space-y-4"}>
          <div className={"space-y-1 text-sm"}>
            <p className={"capitalize font-bold"}>full name of the person</p>
            <div className={"capitalize text-gray-700"}>Senior Developer</div>
            <div className={"flex items-center space-x-2"}>
              <p className={"capitalize font-bold"}>phone:</p>
              <p className={"capitalize text-gray-700"}>+1234567890</p>
            </div>
            <div className={"flex items-center space-x-2"}>
              <p className={"capitalize font-bold"}>email:</p>
              <p className={"capitalize text-gray-700"}>info@mail.com</p>
            </div>
          </div>
          <div className={"space-y-1 text-sm"}>
            <p className={"capitalize font-bold"}>full name of the person</p>
            <div className={"capitalize text-gray-700"}>Project Manager</div>
            <div className={"flex items-center space-x-2"}>
              <p className={"capitalize font-bold"}>phone:</p>
              <p className={"capitalize text-gray-700"}>+1234567890</p>
            </div>
            <div className={"flex items-center space-x-2"}>
              <p className={"capitalize font-bold"}>email:</p>
              <p className={"capitalize text-gray-700"}>info@mail.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
