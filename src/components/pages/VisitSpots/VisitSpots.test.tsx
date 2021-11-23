import * as reactRedux from "react-redux";
import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import VisitSpots from "./VisitSpots";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("VisitSpots component", () => {
  // configure({ adapter: new Adapter() });

  test("should call useDispatch and useSelector functions", () => {

    const useSelectorMock = reactRedux.useSelector;
    const useDispatchMock = reactRedux.useDispatch;
    beforeEach(() => {
      useDispatchMock.mockImplementation(() => () => {});
      useSelectorMock.mockImplementation(selector => selector(mockStore));
  })
  afterEach(() => {
      useDispatchMock.mockClear();
      useSelectorMock.mockClear();
  })

  // const useSelectorMock = reactRedux.useSelector;
  // const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
      thing1: 'this is thing1',
      somewhere: {
          thing2: 'and I am thing2!',
      }
  };

  it('shows thing1 and thing2', () => {
      render(<TargetComponent/>);
      expect(screen.getByText('this is thing1').toBeInTheDocument();
      expect(screen.getByText('and I am thing2!').toBeInTheDocument();
  });

    //   //Arrange
    //   shallow(
    //     // <Provider store={store}>
    //     <VisitSpots />
    //     // </Provider>
    //   );
    //   const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    //   const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    //   const dummyDispatch = jest.fn();
    //   // Act
    //   beforeEach(() => {
    //     useSelectorMock.mockClear();
    //     useDispatchMock.mockClear();
    //   });
    //   useDispatchMock.mockReturnValue(dummyDispatch);
    //   //Assert
    //   expect(dummyDispatch.mock.calls.length).toEqual(1);
    //
  });
});
