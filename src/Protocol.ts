enum Protocol {
  PROTOCOL_VERSION = 9,
  SERVER_ID = 925686942,
  MAGIC = "00ffff00fefefefefdfdfdfd12345678",

  INTERNAL_PING = 0x00,
  UNCONNECTED_PING = 0x01,
  UNCONNECTED_PONG = 0x1c,
  PING_OPEN_CONNECTIONS = 0x02,
  CONNECTED_PONG = 0x03,
  OPEN_CONNECTION_REQUEST_1 = 0x05,
  OPEN_CONNECTION_REPLY_1 = 0x06,
  OPEN_CONNECTION_REQUEST_2 = 0x07,
  OPEN_CONNECTION_REPLY_2 = 0x08,
  CONNECTION_REQUEST = 0x09,
  CONNECTION_REQUEST_ACCEPTED = 0x10,
  RPC = 11,
  RPC_REPLY = 12,
  OUT_OF_BAND_INTERNAL = 13,
  CONNECTION_ATTEMPT_FAILED = 15,
  ALREADY_CONNECTED = 16,
  NEW_INCOMING_CONNECTION = 17,
  NO_FREE_INCOMING_CONNECTIONS = 18,
  DISCONNECTION_NOTIFICATION = 19,
  CONNECTION_LOST = 20,
  RSA_PUBLIC_KEY_MISMATCH = 21,
  CONNECTION_BANNED = 22,
  INVALPASSWORD = 23,
  MODIFIED_PACKET = 24,
  INCOMPATIBLE_PROTOCOL = 0x19,
  // PONG = 26,
  ADVERTISE_SYSTEM = 27,
  REMOTE_DISCONNECTION_NOTIFICATION = 28,
  REMOTE_CONNECTION_LOST = 29,
  REMOTE_NEW_INCOMING_CONNECTION = 30,
  DOWNLOAD_PROGRESS = 31,
  FILE_LIST_TRANSFER_HEADER = 32,
  FILE_LIST_TRANSFER_FILE = 33,
  DDT_DOWNLOAD_REQUEST = 34,
  TRANSPORT_STRING = 35,
  REPLICA_MANAGER_CONSTRUCTION = 36,
  REPLICA_MANAGER_DESTRUCTION = 37,
  REPLICA_MANAGER_SCOPE_CHANGE = 38,
  REPLICA_MANAGER_SERIALIZE = 39,
  REPLICA_MANAGER_DOWNLOAD_STARTED = 40,
  REPLICA_MANAGER_DOWNLOAD_COMPLETE = 41,
  CONNECTION_GRAPH_REQUEST = 42,
  CONNECTION_GRAPH_REPLY = 43,
  CONNECTION_GRAPH_UPDATE = 44,
  CONNECTION_GRAPH_NEW_CONNECTION = 45,
  CONNECTION_GRAPH_CONNECTION_LOST = 46,
  CONNECTION_GRAPH_DISCONNECTION_NOTIFICATION = 47,
  ROUTE_AND_MULTICAST = 48,
  RAKVOICE_OPEN_CHANNEL_REQUEST = 49,
  RAKVOICE_OPEN_CHANNEL_REPLY = 50,
  RAKVOICE_CLOSE_CHANNEL = 51,
  RAKVOICE_DATA = 52,
  AUTOPATCHER_GET_CHANGELIST_SINCE_DATE = 53,
  AUTOPATCHER_CREATION_LIST = 54,
  AUTOPATCHER_DELETION_LIST = 55,
  AUTOPATCHER_GET_PATCH = 56,
  AUTOPATCHER_PATCH_LIST = 57,
  AUTOPATCHER_REPOSITORY_FATAL_ERROR = 58,
  AUTOPATCHER_FINISHED_INTERNAL = 59,
  AUTOPATCHER_FINISHED = 60,
  AUTOPATCHER_RESTART_APPLICATION = 61,
  NAT_PUNCHTHROUGH_REQUEST = 62,
  NAT_TARGET_NOT_CONNECTED = 63,
  NAT_TARGET_CONNECTION_LOST = 64,
  NAT_CONNECT_AT_TIME = 65,
  NAT_SEND_OFFLINE_MESSAGE_AT_TIME = 66,
  NAT_IN_PROGRESS = 67,
  DATABASE_QUERY_REQUEST = 68,
  DATABASE_UPDATE_ROW = 69,
  DATABASE_REMOVE_ROW = 70,
  DATABASE_QUERY_REPLY = 71,
  DATABASE_UNKNOWN_TABLE = 72,
  DATABASE_INCORRECT_PASSWORD = 73,
  READY_EVENT_SET = 74,
  READY_EVENT_UNSET = 75,
  READY_EVENT_ALL_SET = 76,
  READY_EVENT_QUERY = 77,
  LOBBY_GENERAL = 78,
  AUTO_RPC_CALL = 79,
  AUTO_RPC_REMOTE_INDEX = 80,
  AUTO_RPC_UNKNOWN_REMOTE_INDEX = 81,
  RPC_REMOTE_ERROR = 82,
  USER_PACKET_ENUM = 83,

  DATA_PACKET_0 = 0x80,
  DATA_PACKET_1 = 0x81,
  DATA_PACKET_2 = 0x82,
  DATA_PACKET_3 = 0x83,
  DATA_PACKET_4 = 0x84,
  DATA_PACKET_5 = 0x85,
  DATA_PACKET_6 = 0x86,
  DATA_PACKET_7 = 0x87,
  DATA_PACKET_8 = 0x88,
  DATA_PACKET_9 = 0x89,
  DATA_PACKET_A = 0x8a,
  DATA_PACKET_B = 0x8b,
  DATA_PACKET_C = 0x8c,
  DATA_PACKET_D = 0x8d,
  DATA_PACKET_E = 0x8e,
  DATA_PACKET_F = 0x8f,
}

export default Protocol