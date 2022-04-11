import { HYDRATE } from "next-redux-wrapper";
import { SEARCH_USER } from "../../actions/index";

interface IInitialStateProps {
  photoUrl?: string;
  username?: string;
  name?: string;
  about?: string;
  location?: string;
  job?: string;
  profileLink?: string
}

const initialState: IInitialStateProps = {
  photoUrl: '',
  username: '',
  name: '',
  about: '',
  location: '',
  job: '',
  profileLink: ''
};

interface IActionProps {
  type: string;
  payload: any;
}

interface IReducerProps {
  state: IInitialStateProps;
  action: IActionProps
}

const reducer = ({ state = initialState, action }: IReducerProps) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.username };
    case SEARCH_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default reducer;