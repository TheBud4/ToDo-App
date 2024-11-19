import { SignOut as SignOutIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import UserContext from "../../data/contexts/UserContext";
const SignOut = () => {
  const userContext = useContext(UserContext);
  //const [isOpen, setIsOpen] = useState(false);

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const { logout } = userContext;

  return (
    <>
      <div>
        <button
          className="p-2 bg-zinc-200 size-10 flex cursor-pointer justify-center items-center rounded-lg hover:bg-zinc-100"
          onClick={() => logout()}
        >
          <SignOutIcon className="text-zinc-900" size={32} />
        </button>
      </div>
      {/* {isOpen && <div>aaa</div>} */}
    </>
  );
};

export default SignOut;
