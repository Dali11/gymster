import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import useDays from '../../Hook/useDays';



export default function Days() {
    // const [monday,setmonday] = useState(null)
    // const [tuesday,settuesday] = useState(null)
    const [monday, tuesday] = useDays()

    // useEffect(() => {
    //  fetch("http://localhost:8000/monday")
    //  .then(res => {
    //     return res.json()
    //  })
    //  .then(data => {
    //     setmonday(data)
    //  })
    // }, [])

    // useEffect(() => {
    //     fetch("http://localhost:8000/tuesday")
    //     .then(res => {
    //        return res.json()
    //     })
    //     .then(data => {
    //        settuesday(data)
    //        console.log(data)
    //     })
    //    }, [])
    
    

  return (
    <TabsUnstyled defaultValue={0} >
      <TabsListUnstyled className='bg-zinc-800 p-3  md:m-12 rounded-lg flex flex-wrap text-white justify-evenly mb-24'>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>MONDAY</TabUnstyled>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>TUESDAY</TabUnstyled>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>WEDNESDAY</TabUnstyled>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>THURSDAY</TabUnstyled>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>FRIDAY</TabUnstyled>
        <TabUnstyled className='hover:bg-orange-600 w-40 rounded-lg active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-600 p-3'>SATURDAY</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            monday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center'>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
      </TabPanelUnstyled>

       <TabPanelUnstyled value={1} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            tuesday && tuesday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center '>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
      </TabPanelUnstyled>

      <TabPanelUnstyled value={2} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            monday && monday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center'>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
     </TabPanelUnstyled>

     <TabPanelUnstyled value={3} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            tuesday && tuesday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center '>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
      </TabPanelUnstyled>

     <TabPanelUnstyled value={4} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            monday && monday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center'>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
     </TabPanelUnstyled>

     <TabPanelUnstyled value={5} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            tuesday && tuesday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center '>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
      </TabPanelUnstyled>

     <TabPanelUnstyled value={6} className="grid gap-8 grid-cols-1 md:grid-cols-4 pl-5 pr-5">
        {
            monday && monday.map((data) => {
                return(
                        <div key={data.id} className='bg-zinc-800 text-white p-16 text-center'>
                            <h3 className="font-bold pb-2">{data.time}</h3>
                            <h1 className="uppercase font-black text-xl text-orange-600">{data.title}</h1>
                            <h1 className="uppercase font-bold pt-3 text-lg">{data.master}</h1>

                    </div>
                )
            })
        }
     </TabPanelUnstyled>

     
    </TabsUnstyled>
  );
}