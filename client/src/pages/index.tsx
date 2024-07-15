import QuestionsTable from "@/components/QuestionsTable/QuestionsTable";
import Topbar from "@/components/Topbar/Topbar";

export default function Home() {
  return (
    <div className="bg-dark-layer-2 min-h-screen">
      <main>
        <Topbar />
        <h1
          className='text-2xl text-center text-gray-400 font-medium
					uppercase mt-10 mb-5'
        >
          Choose Code Block
        </h1>
        <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
          <table className='text-sm text-left text-gray-300 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
            <thead className='text-xs text-gray-400 uppercase border-b border-gray-600'>
              <tr>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Difficulty
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Category
                </th>
              </tr>
            </thead>
            <QuestionsTable />
          </table>
        </div>
      </main>
    </div>
  );
}