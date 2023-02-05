/****** Object:  Table [dbo].[department]    Script Date: 2/5/2023 3:31:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[department](
	[id] [int] NULL,
	[department_name] [nchar](100) NULL
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Student]    Script Date: 2/5/2023 3:31:06 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[student_name] [varchar](100) NULL,
	[department] [varchar](100) NULL
) ON [PRIMARY]
GO
USE [master]
GO