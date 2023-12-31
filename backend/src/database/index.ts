import { Sequelize } from "sequelize-typescript";
import Baileys from "../models/Baileys";
import Chatbot from "../models/Chatbot";
import Contact from "../models/Contact";
import ContactCustomField from "../models/ContactCustomField";
import DialogChatBots from "../models/DialogChatBots";
// import dbConfig from "../config/database";
import MassMessages from "../models/MassMessages";
import Message from "../models/Message";
import Queue from "../models/Queue";
import QuickAnswer from "../models/QuickAnswer";
import Schedule from "../models/Schedule";
import Setting from "../models/Setting";
import SettingMessage from "../models/SettingMessage";
import Tag from "../models/Tag";
import Ticket from "../models/Ticket";
import TicketTracking from "../models/TicketTracking";
import TicketTag from "../models/TicketTag";
import User from "../models/User";
import UserQueue from "../models/UserQueue";
import Whatsapp from "../models/Whatsapp";
import WhatsappQueue from "../models/WhatsappQueue";
// eslint-disable-next-line
const dbConfig = require("../config/database");

const sequelize = new Sequelize(dbConfig);

const models = [
  User,
  Contact,
  Ticket,
  Message,
  Whatsapp,
  ContactCustomField,
  Setting,
  Queue,
  WhatsappQueue,
  UserQueue,
  QuickAnswer,
  Baileys,
  Chatbot,
  DialogChatBots,
  Schedule,
  Tag,
  TicketTag,
  TicketTracking,
  SettingMessage,
  MassMessages,
];

sequelize.addModels(models);

export default sequelize;
