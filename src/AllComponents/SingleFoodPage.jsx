import { useLocation } from 'react-router-dom';
import useAuth from '../Authentication/Useauth';
import { toast } from 'react-toastify';
import useMycart from '../Hook-All/Hooks/useMycart';
import { Helmet } from 'react-helmet';
import UseAxiospublic from '../Hook-All/Hooks/UseAxiospublic';
const axiosPublic = UseAxiospublic();

const SingleFoodPage = () => {
    const location = useLocation();
    // console.log(location)
    const { food } = location.state;  
    // console.log(food)
    const [refetch] =useMycart()
    
    const {user}=useAuth()
    const email = user.email

    const Purchase = async (item)=>{

    const data = {
    
        name: item.name,
        price: item.price,
        image: item.image,
        email: user?.email  
    
};
// console.log(data)


        const result=   axiosPublic.post('/purchase' ,data);
        if((await result).data.insertedId ){
            refetch()
            toast.success('Item added to your cart !')
        }



    }


    return (
        <div className="max-w-4xl mx-auto p-6 mt-6 bg-stone-100 shadow-md rounded-lg">
            <Helmet>
        <title>Home| Bite-Bazar - Food page </title>
         
      </Helmet>
      
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{food.name}</h1>
            <img src={food.image} alt={food.name} className="w-full h-72 object-cover rounded-md mb-4" />
            
            <div className="text-lg mb-2">
                <strong>Category:</strong> {food.category}
            </div>
            <div className="text-lg mb-2">
                <strong>Price:</strong> ${food.price}
            </div>
            <div className="text-lg mb-2">
                <strong>Made By:</strong> {food.madeBy}
            </div>
            <div className="text-lg mb-2">
                <strong>Food Origin:</strong> {food.origin}
            </div>
            <div className="text-lg mb-2">
                <strong>Description:</strong> {food.description}
            </div>
            <div className="mt-6 flex justify-end">
                <button onClick={()=> Purchase(food)} className="btn hover:bg-[#574f17] bg-[#9a8c30] text-white font-semibold py-2">
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default SingleFoodPage;
