import dynamic from "next/dynamic";
import HeadGeneral from "./HeadGeneral";
import Modal from "./Modal";
import Hamburger from "./Hamburger";
import CheckBox from "./CheckBox";
import LoadingSpinner from "./LoadingSpinner";
import InputOTP from "./InputOTP";
import OptionProduct from "./OptionProduct";
import ProductPremium from "./ProductPremium";
import Footer from "./Footer";
import ImageTransition from "./ImageTransition";
import QuickViewProduct from "./QuickViewProduct";
import ButtonQuantity from "./ButtonQuantity";
import RowLineProducts from "./RowLineProducts";
import ParserElement from "../core/ParserElement";
import ListElement from "./ListElement";
import ButtonQuantitySystem from "./ButtonQuantitySystemAPI";
import LoadingProducts from "./LoadingProducts";
import ButtonToggle from "./ButtonToggle";
import LoadingBlogGrid from "./LoadingBlogGrid";
import UploadFile from './UploadFile';

const Editor = dynamic(() => import('./Editor'), {
  ssr: false
});

export {
  HeadGeneral,
  Modal,
  Hamburger,
  CheckBox,
  LoadingSpinner,
  InputOTP,
  OptionProduct,
  ProductPremium,
  Footer,
  ImageTransition,
  QuickViewProduct,
  ButtonQuantity,
  RowLineProducts,
  ParserElement,
  ListElement,
  ButtonQuantitySystem,
  LoadingProducts,
  Editor,
  ButtonToggle,
  LoadingBlogGrid,
  UploadFile
};
