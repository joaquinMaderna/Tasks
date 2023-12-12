import {useForm} from "react-hook-form"

function TaskFormPage() {

    const {register, handleSubmit} = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return(
        <div className="bg-slate-700 h-screen flex item-center justify-center" >
            <div className="bg-zinc-800 relative my-10 w-full max-w-md h-80  flex-col p-6  shadow-md rounded-md" >
            <h1 className="text-2xl font-bold text-white  p-1 flex justify-center"  >New Task</h1>
                <form onSubmit={onSubmit} >
     
                    <input className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all hover:bg-slate-500/10 active:bg-slate-500/30 "  type="text" placeholder="Title" 
                    {...register("title")}
                    autoFocus />
                    
                    <textarea  className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all hover:bg-slate-500/10 active:bg-slate-500/30 " rows="3" placeholder="Descripcion"
                    {...register("title")}
                    ></textarea>
                
                    <button className="flex justify-center rounded-lg py-2 px-4 font-bold text-white transition-all hover:bg-slate-400/10 active:bg-slate-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true">Save</button>
                </form>
            </div>
        </div>
    )
}
export default TaskFormPage