import React from "react";

const Table = () => {
  return (
    <>
      <div>
        <table className="table-auto border-dotted border-2">
          <thead>
            <tr className="px-4 py-2 text-black text-opacity-90 text-2xl font-bold leading-loose">
              Table Title
            </tr>
            <tr className="w-96 text-black text-opacity-60 text-sm font-normal leading-tight tracking-tight">
              Additional description if required
            </tr>
            <tr>
              <div className="w-96 h-20 p-4 justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-14 justify-start items-center gap-4 flex">
                  <div className="w-72 flex-col justify-start items-start inline-flex">
                    <div className="h-0.5 px-4 bg-white justify-start items-center gap-2.5 inline-flex">
                      <div className="text-black text-opacity-60 text-xs font-normal leading-3 tracking-tight">
                        Search
                      </div>
                    </div>
                    <div className="self-stretch px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                      <div className="self-stretch py-4 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 text-black text-opacity-90 text-base font-normal leading-normal tracking-tight">
                          <input placeholder="Name, email, etc..."></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="w-44 flex-col justify-start items-start inline-flex">
                      <div className="self-stretch  px-3 rounded border border-black border-opacity-25 flex-col justify-start items-start flex">
                        <div className="h-0.5 px-2 bg-white justify-start items-center gap-2.5 inline-flex">
                          <div className="text-black text-opacity-60 text-xs font-normal leading-3 tracking-tight">
                            <div type="text">Attribute</div>
                          </div>
                        </div>

                        <div className="self-stretch py-2 justify-start items-center inline-flex">
                          <div className="w-px h-10 relative"></div>
                          <select className="inline-flex grow shrink basis-0 text-black text-opacity-90 text-base font-normal leading-normal tracking-tight">
                            <option value="Value1" c>
                              Property
                            </option>
                          </select>
                          <div className="w-6 h-px relative"></div>
                          <div className="w-6 h-6 relative"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="p-2 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative"></div>
                    </div>
                  </div>
                </div>
                <tr className="justify-start items-center gap-4 flex">
                  <div className="px-4 py-1.5 rounded border border-black border-opacity-90 flex-col justify-center items-center inline-flex">
                    <div className="justify-center items-center gap-2 inline-flex">
                      <button className="text-black text-opacity-90 text-sm font-medium uppercase leading-normal tracking-wide">
                        Action
                      </button>
                    </div>
                  </div>
                  <div class="px-4 py-1.5 bg-red-600 rounded shadow flex-col justify-center items-center inline-flex">
                    <div class="justify-center items-center gap-2 inline-flex">
                      <button class="text-white text-sm font-medium uppercase leading-normal tracking-wide">
                        Action
                      </button>
                    </div>
                  </div>
                  <div className="p-2 rounded-full flex-col justify-center items-center inline-flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="w-6 h-6 relative"></div>
                    </div>
                  </div>
                </tr>
              </div>
            </tr>
            <tr className="hover:bg-red-100">
              <th className="border-b-2 px-4 py-2">Column 1</th>
              <th className="border-b-2 px-4 py-2">Column 2</th>
              <th className="border-b-2 px-4 py-2">Column 3</th>
              <th className="border-b-2 px-4 py-2">Column 4</th>
              <th className="border-b-2 px-4 py-2">Column 5</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 1, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 1, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 1, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 1, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 1, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 2, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 2, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 2, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 2, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 2, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 3, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 3, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 3, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 3, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 3, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 4, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 4, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 4, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 4, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 4, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 5, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 5, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 5, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 5, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 5, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 6, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 6, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 6, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 6, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 6, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 7, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 7, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 7, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 7, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 7, Cell 5</td>
            </tr>
            <tr className="hover:bg-red-50">
              <td className="border-b-2 px-4 py-2">Row 8, Cell 1</td>
              <td className="border-b-2 px-4 py-2">Row 8, Cell 2</td>
              <td className="border-b-2 px-4 py-2">Row 8, Cell 3</td>
              <td className="border-b-2 px-4 py-2">Row 8, Cell 4</td>
              <td className="border-b-2 px-4 py-2">Row 8, Cell 5</td>
            </tr>
            <tr className="h-11 text-right hover:bg-red-50">

              
              <td>Rows per page: 10   1-5 of 13  </td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
