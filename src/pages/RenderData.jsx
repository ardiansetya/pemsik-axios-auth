import { UseFetchData } from "../hooks/useFetchData";

const RenderData = () => {
    const {posts} = UseFetchData()

        return posts.map((data, index) => {
            return (
              <div key={index} className="overflow-x-auto">
                <table className="min-w-full text-sm text-gray-700">
                  <thead className="border-b border-gray-300 bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium">ID</th>
                      <th className="px-6 py-3 text-left font-medium">Title</th>
                      <th className="px-6 py-3 text-left font-medium">Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 border-b border-gray-200">
                        {data.id}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {data.title}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        {data.body}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          });
    
  };
  export default RenderData