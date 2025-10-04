-- Warpah Exploit - Magnet Push/Pull Parts (OPTIMIZED - NO LAG)
-- Design Like Right Panel - Clean & Professional

local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local UIS = game:GetService("UserInputService")
local player = Players.LocalPlayer

-- Variables
local magnetEnabled = false
local magnetPower = 50
local magnetRange = 100
local magnetMode = "PULL"
local minimized = false

-- Performance Settings
local UPDATE_INTERVAL = 0.03 -- Update lebih cepat untuk respons lebih baik
local lastUpdate = 0
local cachedParts = {}
local CACHE_REFRESH_TIME = 2 -- Refresh cache setiap 2 detik
local lastCacheRefresh = 0

-- Character
local char = player.Character or player.CharacterAdded:Wait()
local hrp = char:WaitForChild("HumanoidRootPart")

-- Create GUI
local gui = Instance.new("ScreenGui")
gui.Name = "WarpahExploitGUI"
gui.ResetOnSpawn = false
gui.DisplayOrder = 999
gui.Parent = game:GetService("CoreGui")

-- Main Frame
local main = Instance.new("Frame", gui)
main.Size = UDim2.new(0, 350, 0, 280)
main.Position = UDim2.new(0.5, -175, 0.5, -140)
main.BackgroundColor3 = Color3.fromRGB(12, 12, 15)
main.BorderSizePixel = 0
main.Active = true
main.Draggable = true

Instance.new("UICorner", main).CornerRadius = UDim.new(0, 8)

-- Neon Border
local stroke = Instance.new("UIStroke", main)
stroke.Color = Color3.fromRGB(0, 255, 100)
stroke.Thickness = 2

-- Header
local header = Instance.new("Frame", main)
header.Size = UDim2.new(1, 0, 0, 48)
header.BackgroundColor3 = Color3.fromRGB(8, 8, 10)
header.BorderSizePixel = 0

Instance.new("UICorner", header).CornerRadius = UDim.new(0, 8)

local headerFix = Instance.new("Frame", header)
headerFix.Size = UDim2.new(1, 0, 0.5, 0)
headerFix.Position = UDim2.new(0, 0, 0.5, 0)
headerFix.BackgroundColor3 = Color3.fromRGB(8, 8, 10)
headerFix.BorderSizePixel = 0

-- Title
local title = Instance.new("TextLabel", header)
title.Size = UDim2.new(1, -100, 1, 0)
title.Position = UDim2.new(0, 15, 0, 0)
title.BackgroundTransparency = 1
title.Text = "WARPAH EXPLOIT"
title.TextColor3 = Color3.fromRGB(0, 255, 100)
title.TextSize = 16
title.Font = Enum.Font.GothamBold
title.TextXAlignment = Enum.TextXAlignment.Left

-- Minimize Button
local minBtn = Instance.new("TextButton", header)
minBtn.Size = UDim2.new(0, 35, 0, 33)
minBtn.Position = UDim2.new(1, -80, 0.5, -16.5)
minBtn.BackgroundColor3 = Color3.fromRGB(15, 15, 18)
minBtn.Text = "-"
minBtn.TextColor3 = Color3.fromRGB(0, 255, 100)
minBtn.TextSize = 22
minBtn.Font = Enum.Font.GothamBold
minBtn.BorderSizePixel = 0

Instance.new("UICorner", minBtn).CornerRadius = UDim.new(0, 6)

-- Close Button
local closeBtn = Instance.new("TextButton", header)
closeBtn.Size = UDim2.new(0, 35, 0, 33)
closeBtn.Position = UDim2.new(1, -40, 0.5, -16.5)
closeBtn.BackgroundColor3 = Color3.fromRGB(220, 50, 50)
closeBtn.Text = "X"
closeBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
closeBtn.TextSize = 18
closeBtn.Font = Enum.Font.GothamBold
closeBtn.BorderSizePixel = 0

Instance.new("UICorner", closeBtn).CornerRadius = UDim.new(0, 6)

-- Content Container
local content = Instance.new("Frame", main)
content.Size = UDim2.new(1, -30, 1, -60)
content.Position = UDim2.new(0, 15, 0, 55)
content.BackgroundTransparency = 1

-- Toggle Button (Large Green)
local toggleBtn = Instance.new("TextButton", content)
toggleBtn.Size = UDim2.new(1, 0, 0, 48)
toggleBtn.Position = UDim2.new(0, 0, 0, 0)
toggleBtn.BackgroundColor3 = Color3.fromRGB(0, 200, 80)
toggleBtn.Text = "START MAGNET"
toggleBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
toggleBtn.TextSize = 15
toggleBtn.Font = Enum.Font.GothamBold
toggleBtn.BorderSizePixel = 0

Instance.new("UICorner", toggleBtn).CornerRadius = UDim.new(0, 6)

-- Mode Container
local modeFrame = Instance.new("Frame", content)
modeFrame.Size = UDim2.new(1, 0, 0, 42)
modeFrame.Position = UDim2.new(0, 0, 0, 56)
modeFrame.BackgroundTransparency = 1

-- Pull Button
local pullBtn = Instance.new("TextButton", modeFrame)
pullBtn.Size = UDim2.new(0.485, 0, 1, 0)
pullBtn.Position = UDim2.new(0, 0, 0, 0)
pullBtn.BackgroundColor3 = Color3.fromRGB(0, 140, 255)
pullBtn.Text = "PULL"
pullBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
pullBtn.TextSize = 14
pullBtn.Font = Enum.Font.GothamBold
pullBtn.BorderSizePixel = 0

Instance.new("UICorner", pullBtn).CornerRadius = UDim.new(0, 6)

-- Push Button
local pushBtn = Instance.new("TextButton", modeFrame)
pushBtn.Size = UDim2.new(0.485, 0, 1, 0)
pushBtn.Position = UDim2.new(0.515, 0, 0, 0)
pushBtn.BackgroundColor3 = Color3.fromRGB(35, 38, 42)
pushBtn.Text = "PUSH"
pushBtn.TextColor3 = Color3.fromRGB(120, 125, 130)
pushBtn.TextSize = 14
pushBtn.Font = Enum.Font.GothamBold
pushBtn.BorderSizePixel = 0

Instance.new("UICorner", pushBtn).CornerRadius = UDim.new(0, 6)

-- Power Container
local powerContainer = Instance.new("Frame", content)
powerContainer.Size = UDim2.new(1, 0, 0, 44)
powerContainer.Position = UDim2.new(0, 0, 0, 106)
powerContainer.BackgroundColor3 = Color3.fromRGB(18, 20, 24)
powerContainer.BorderSizePixel = 0

Instance.new("UICorner", powerContainer).CornerRadius = UDim.new(0, 6)

local powerLbl = Instance.new("TextLabel", powerContainer)
powerLbl.Size = UDim2.new(0.3, 0, 1, 0)
powerLbl.Position = UDim2.new(0, 12, 0, 0)
powerLbl.BackgroundTransparency = 1
powerLbl.Text = "Power:"
powerLbl.TextColor3 = Color3.fromRGB(0, 255, 100)
powerLbl.TextSize = 13
powerLbl.Font = Enum.Font.GothamBold
powerLbl.TextXAlignment = Enum.TextXAlignment.Left

local powerInput = Instance.new("TextBox", powerContainer)
powerInput.Size = UDim2.new(0.35, 0, 0, 28)
powerInput.Position = UDim2.new(0.6, 0, 0.5, -14)
powerInput.BackgroundColor3 = Color3.fromRGB(0, 255, 100)
powerInput.Text = "999"
powerInput.TextColor3 = Color3.fromRGB(10, 12, 15)
powerInput.TextSize = 14
powerInput.Font = Enum.Font.GothamBold
powerInput.TextXAlignment = Enum.TextXAlignment.Center
powerInput.BorderSizePixel = 0

Instance.new("UICorner", powerInput).CornerRadius = UDim.new(0, 6)

-- Range Container
local rangeContainer = Instance.new("Frame", content)
rangeContainer.Size = UDim2.new(1, 0, 0, 44)
rangeContainer.Position = UDim2.new(0, 0, 0, 158)
rangeContainer.BackgroundColor3 = Color3.fromRGB(18, 20, 24)
rangeContainer.BorderSizePixel = 0

Instance.new("UICorner", rangeContainer).CornerRadius = UDim.new(0, 6)

local rangeLbl = Instance.new("TextLabel", rangeContainer)
rangeLbl.Size = UDim2.new(0.3, 0, 1, 0)
rangeLbl.Position = UDim2.new(0, 12, 0, 0)
rangeLbl.BackgroundTransparency = 1
rangeLbl.Text = "Range:"
rangeLbl.TextColor3 = Color3.fromRGB(0, 255, 100)
rangeLbl.TextSize = 13
rangeLbl.Font = Enum.Font.GothamBold
rangeLbl.TextXAlignment = Enum.TextXAlignment.Left

local rangeInput = Instance.new("TextBox", rangeContainer)
rangeInput.Size = UDim2.new(0.35, 0, 0, 28)
rangeInput.Position = UDim2.new(0.6, 0, 0.5, -14)
rangeInput.BackgroundColor3 = Color3.fromRGB(0, 255, 100)
rangeInput.Text = "100"
rangeInput.TextColor3 = Color3.fromRGB(10, 12, 15)
rangeInput.TextSize = 14
rangeInput.Font = Enum.Font.GothamBold
rangeInput.TextXAlignment = Enum.TextXAlignment.Center
rangeInput.BorderSizePixel = 0

Instance.new("UICorner", rangeInput).CornerRadius = UDim.new(0, 6)

-- Parts Affected Label (Bottom)
local infoLbl = Instance.new("TextLabel", content)
infoLbl.Size = UDim2.new(1, 0, 0, 30)
infoLbl.Position = UDim2.new(0, 0, 1, -30)
infoLbl.BackgroundTransparency = 1
infoLbl.Text = "Parts Affected: 0"
infoLbl.TextColor3 = Color3.fromRGB(0, 255, 100)
infoLbl.TextSize = 14
infoLbl.Font = Enum.Font.GothamBold
infoLbl.TextXAlignment = Enum.TextXAlignment.Center

-- OPTIMIZED FUNCTIONS
local function isPartOfPlayer(obj)
    if not obj or not obj.Parent then return true end
    
    local p = obj
    for i = 1, 5 do
        p = p.Parent
        if not p then break end
        if p == char then return true end
        if Players:GetPlayerFromCharacter(p) then return true end
    end
    return false
end

local function refreshCache()
    cachedParts = {}
    
    for _, obj in ipairs(workspace:GetDescendants()) do
        if obj:IsA("BasePart") and not obj.Anchored and obj.CanCollide then
            if not isPartOfPlayer(obj) then
                table.insert(cachedParts, obj)
            end
        end
    end
    
    print("🔄 Cache Refreshed: " .. #cachedParts .. " parts found")
end

local function updateMode()
    if magnetMode == "PULL" then
        pullBtn.BackgroundColor3 = Color3.fromRGB(0, 140, 255)
        pullBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
        
        pushBtn.BackgroundColor3 = Color3.fromRGB(35, 38, 42)
        pushBtn.TextColor3 = Color3.fromRGB(120, 125, 130)
    else
        pushBtn.BackgroundColor3 = Color3.fromRGB(255, 100, 30)
        pushBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
        
        pullBtn.BackgroundColor3 = Color3.fromRGB(35, 38, 42)
        pullBtn.TextColor3 = Color3.fromRGB(120, 125, 130)
    end
end

local connection = nil

local function toggle()
    magnetEnabled = not magnetEnabled
    
    if magnetEnabled then
        toggleBtn.Text = "STOP MAGNET"
        toggleBtn.BackgroundColor3 = Color3.fromRGB(220, 50, 50)
        
        -- Initial cache
        refreshCache()
        lastCacheRefresh = tick()
        lastUpdate = tick()
        
        connection = RunService.Heartbeat:Connect(function()
            local currentTime = tick()
            
            -- Throttle updates lebih ringan
            if currentTime - lastUpdate < UPDATE_INTERVAL then
                return
            end
            lastUpdate = currentTime
            
            if not char or not hrp then return end
            
            -- Refresh cache periodically
            if currentTime - lastCacheRefresh > CACHE_REFRESH_TIME then
                refreshCache()
                lastCacheRefresh = currentTime
            end
            
            local count = 0
            local hrpPos = hrp.Position
            
            -- Process cached parts
            for i = #cachedParts, 1, -1 do
                local obj = cachedParts[i]
                
                -- Validasi part
                if not obj or not obj.Parent or obj.Anchored then
                    table.remove(cachedParts, i)
                    local bv = obj and obj:FindFirstChild("MagnetForce")
                    if bv then bv:Destroy() end
                else
                    -- Cek jarak dengan pcall untuk keamanan
                    local success, dist = pcall(function()
                        return (obj.Position - hrpPos).Magnitude
                    end)
                    
                    if success and dist <= magnetRange and dist > 3 then
                        local dir
                        if magnetMode == "PULL" then
                            dir = (hrpPos - obj.Position).Unit
                        else
                            dir = (obj.Position - hrpPos).Unit
                        end
                        
                        -- Cari atau buat BodyVelocity
                        local bv = obj:FindFirstChild("MagnetForce")
                        if not bv then
                            bv = Instance.new("BodyVelocity")
                            bv.Name = "MagnetForce"
                            bv.MaxForce = Vector3.new(math.huge, math.huge, math.huge)
                            bv.P = 1250
                            bv.Parent = obj
                        end
                        
                        bv.Velocity = dir * magnetPower
                        count = count + 1
                    else
                        -- Hapus force jika di luar range
                        local bv = obj:FindFirstChild("MagnetForce")
                        if bv then 
                            bv:Destroy() 
                        end
                    end
                end
            end
            
            infoLbl.Text = "Parts Affected: " .. count
        end)
    else
        toggleBtn.Text = "START MAGNET"
        toggleBtn.BackgroundColor3 = Color3.fromRGB(0, 200, 80)
        
        if connection then
            connection:Disconnect()
        end
        
        -- Clean up all forces
        for i = 1, #cachedParts do
            local obj = cachedParts[i]
            if obj and obj.Parent then
                local bv = obj:FindFirstChild("MagnetForce")
                if bv then bv:Destroy() end
            end
        end
        
        cachedParts = {}
        infoLbl.Text = "Parts Affected: 0"
    end
end

-- Minimize Function
local function toggleMinimize()
    minimized = not minimized
    
    if minimized then
        main:TweenSize(UDim2.new(0, 350, 0, 48), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.3, true)
        content.Visible = false
        minBtn.Text = "□"
    else
        main:TweenSize(UDim2.new(0, 350, 0, 280), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.3, true)
        content.Visible = true
        minBtn.Text = "-"
    end
end

-- Connections
toggleBtn.MouseButton1Click:Connect(toggle)

pullBtn.MouseButton1Click:Connect(function()
    magnetMode = "PULL"
    updateMode()
end)

pushBtn.MouseButton1Click:Connect(function()
    magnetMode = "PUSH"
    updateMode()
end)

minBtn.MouseButton1Click:Connect(toggleMinimize)

closeBtn.MouseButton1Click:Connect(function()
    if connection then connection:Disconnect() end
    
    for i = 1, #cachedParts do
        local obj = cachedParts[i]
        if obj and obj.Parent then
            local bv = obj:FindFirstChild("MagnetForce")
            if bv then bv:Destroy() end
        end
    end
    
    gui:Destroy()
end)

-- Input Handling
powerInput.FocusLost:Connect(function(enter)
    local num = tonumber(powerInput.Text)
    if num and num >= 1 then
        magnetPower = num
    else
        powerInput.Text = tostring(magnetPower)
    end
end)

rangeInput.FocusLost:Connect(function(enter)
    local num = tonumber(rangeInput.Text)
    if num and num >= 1 then
        magnetRange = num
    else
        rangeInput.Text = tostring(magnetRange)
    end
end)

-- Init
updateMode()

-- Respawn
player.CharacterAdded:Connect(function(newChar)
    task.wait(0.5)
    char = newChar
    hrp = char:WaitForChild("HumanoidRootPart")
    
    if magnetEnabled then
        refreshCache()
    end
end)

print("✅ Warpah Exploit Loaded! (OPTIMIZED)")
print("🎨 Design: Clean Panel Style")
print("⚡ Performance: No Lag | Throttled Updates")
print("📊 Radius: 100 studs | FE Compatible")
