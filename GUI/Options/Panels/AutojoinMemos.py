from PyQt4 import QtCore
from PyQt4 import QtGui

class MemoEntryItem(QtGui.QListWidgetItem):
	def __init__(self,MemoName):
		QtGui.QListWidgetItem.__init__(self,MemoName)
		self.MemoName = MemoName

class Panel(QtGui.QWidget):
	def __init__(self,Config):
		QtGui.QWidget.__init__(self)
		self.Config = Config

		self.TitleLabel = QtGui.QLabel("Memos to join on startup:")
		self.MemosList = QtGui.QListWidget()
		self.MemoNameEntry = QtGui.QLineEdit()
		self.RemoveButton = QtGui.QPushButton("REMOVE")
		self.AddButton = QtGui.QPushButton("ADD")

		Layout = QtGui.QVBoxLayout(self)
		Layout.setAlignment(QtCore.Qt.AlignTop)
		Layout.addWidget(self.TitleLabel)
		Layout.addWidget(self.MemosList)
		Layout.addWidget(self.MemoNameEntry)
		AddRemoveButtonLayout = QtGui.QHBoxLayout()
		AddRemoveButtonLayout.addWidget(self.RemoveButton)
		AddRemoveButtonLayout.addWidget(self.AddButton)
		Layout.addLayout(AddRemoveButtonLayout)

		self.connect(self.RemoveButton,QtCore.SIGNAL("clicked()"),self,QtCore.SLOT("RemoveSelectedMemo()"))
		self.connect(self.AddButton,QtCore.SIGNAL("clicked()"),self,QtCore.SLOT("AddMemoFromTextEntry()"))

		for MemoName in self.Config.config.get("AutojoinMemos",[]):
			self.AddMemoEntry(MemoName)

	@QtCore.pyqtSlot()
	def RemoveSelectedMemo(self):
		self.MemosList.takeItem(self.MemosList.currentRow())

	@QtCore.pyqtSlot()
	def AddMemoFromTextEntry(self):
		MemoName = str(self.MemoNameEntry.text()).strip()
		if (MemoName != ""):
			self.AddMemoEntry(MemoName)
			self.MemoNameEntry.setText("")

	def AddMemoEntry(self,MemoName):
		self.MemosList.addItem(MemoEntryItem(MemoName))

	def SaveOptions(self):
		MemosListed = []
		
		for MemoIndex in range(self.MemosList.count()):
			MemoItem = self.MemosList.item(MemoIndex)
			MemosListed.append(MemoItem.MemoName)
		
		self.Config.set("AutojoinMemos",MemosListed)
