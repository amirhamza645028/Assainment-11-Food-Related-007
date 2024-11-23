// components/Mypostfood.jsx
import Mypostfoodtable from '../AllComponents/Mypostfoodtable';
import useMypost from '../Hook-All/Hooks/Usemypost';
import { Helmet } from 'react-helmet';

const Mypostfood = () => {
    const  [refetch ,foodItems] = useMypost();  

    return (
        <div className="container mx-auto p-4">
               <Helmet>
        <title>My Food| Bite-Bazar  </title>
         
      </Helmet>
            <h2 className="text-2xl font-bold mb-4">My Posted Food Items {foodItems.length}</h2>
            <Mypostfoodtable   />
        </div>
    );
};

export default Mypostfood;
