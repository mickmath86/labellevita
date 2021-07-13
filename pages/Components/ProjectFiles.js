/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'



const posts = [
    {
      title: 'Due Dilligence',
      href: 'https://drive.google.com/drive/folders/1ddDJ-DvXk2Lhsoax8n4iJcVj2juhnr60',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Sales Information',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Cost Estimates',
      href: 'https://docs.google.com/spreadsheets/d/11ccEImOlAxL-vN-rmA-sLODH1h6NcX3j/edit#gid=1185543045',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://docs.google.com/spreadsheets/d/11ccEImOlAxL-vN-rmA-sLODH1h6NcX3j/edit#gid=1185543045',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        imageUrl:
          'https://docs.google.com/spreadsheets/d/11ccEImOlAxL-vN-rmA-sLODH1h6NcX3j/edit#gid=1185543045',
      },
     
    },
    {
        title: 'Sales Incentives',
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
          'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
          name: 'Daniela Metz',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
  ]

  
  
  export default function ProjectFiles() {
    return (
      <div id="project-files" className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-blue-800 sm:text-4xl">Project Files</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
             Information about the files in general can go here...
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {posts.map((post) => (
                <Link key="1" href={post.href}>
                
            <a className="hover:pointer border-1  rounded">
              <div key={post.title} className="flex flex-col rounded-lg border hover:border-0 shadow-lg hover:shadow-md  overflow-hidden ">
                <div className="flex-shrink-0">
                    
                  {/* <img className="h-32 w-full object-cover" src={post.imageUrl} alt="" /> */}
                </div>
                <div className="flex-1 bg-white hover:bg-gray-100 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                 
                    <p className="text-sm font-medium text-indigo-600">
                      File Link
                    </p>
                    <Link href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      {/* <p className="mt-3 text-base text-gray-500">{post.description}</p> */}
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    
                    <div className="button flex flex-row px-3 py-2 w-full md:w-auto justify-items-center bg-indigo-500 text-white hover:bg-indigo-800 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                      <p>Click to View</p>
                    </div>
                  </div>
                </div>
              </div>
              </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  // function folder(){
  //   (
  //     <svg xmlns="http://www.w3.org/2000/svg" class="h-24  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  //     </svg>
  //   )
  // }