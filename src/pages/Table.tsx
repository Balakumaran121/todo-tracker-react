const Table =()=>{
    return(
        <div className=" flex items-center justify-center bg-orange-100 h-screen   ">
            <div className=" w-2/5 h-80 m-8 p-5 bg-gray-100 rounded-lg shadow-md">
        <div className="  mt-10 ml-5">
            <h3 className="font-medium text-2xl  flex justify-start">ToDo List</h3>
            <div className="mt-5 ml-8  flex justify-center">
            <input className="border-2 border-black w-56  "type="text" placeholder="Search"/>
            <button className="bg-purple-700 py-2 px-3 text-white ml-5 text-sm rounded-lg hover:bg-gray-600">Add Task</button>
            </div>
            <table className="mt-5  flex justify-center">
                <thead>
                    
                    <tr>
                        <th> </th>
                        <th className="border-2 border-black ">S.No</th>
                        <th className="border-2 border-black px-10 ">Tasks</th>
                    </tr>
                    <tr>
                        <td ><input  type="checkbox"  className="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></td>
                        <td className="border-2 border-black text-center "> 1 </td>
                        <td className="border-2 border-black px-10"> Analysize Today task</td>
                    </tr>
                    <tr>
                        <td ><input  type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></td>
                        <td className="border-2 border-black text-center"> 2 </td>
                        <td className="border-2 border-black px-10"> Prepare for task</td>
                    </tr>
                    <tr>
                        <td ><input  type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></td>
                        <td className="border-2 border-black text-center"> 3 </td>
                        <td className="border-2 border-black px-10"> Divide the task</td>
                    </tr>
                    <tr>
                        <td ><input  type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/></td>
                        <td className="border-2 border-black text-center"> 4 </td>
                        <td className="border-2 border-black px-10"> Take Frequent break</td>
                    </tr>
                </thead>
            </table>
            

        </div>
        </div>
        </div>
    )
}
export default Table